export default function githubEncodeContents(content, encoding) {
  return Buffer.from(content, encoding).toString()
}
