import { Project } from '@/data/projects/projects';
import fs from 'fs';
import path from 'path';

type Metadata = Omit<Project, 'content'>;

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { metadata: {} as Metadata, content: fileContent.trim() };
  }

  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Metadata = {} as Metadata;

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    let parsedValue: string | string[] = value;
    if (value.startsWith('[') && value.endsWith(']')) {
      parsedValue = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => item.replace(/^['"](.*)['"]$/, '$1'));
    }
    const trimmedKey = key.trim() as keyof Metadata;
    if (trimmedKey === 'categories' || trimmedKey === 'tags') {
      metadata[trimmedKey] = Array.isArray(parsedValue)
        ? parsedValue
        : typeof parsedValue === 'string' && parsedValue.length > 0
          ? [parsedValue]
          : [];
    } else {
      metadata[trimmedKey] = parsedValue as never;
    }
  });

  return { metadata: metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      slug,
      ...metadata,
      content,
    };
  });
}
