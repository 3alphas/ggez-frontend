type IndexItem = {
  name: string;
  type: "directory" | "file";
  mtime: string;
  size?: number;
};

export async function fetchIndex() {
  const request = await fetch("https://uppi.fi/");
  const files: IndexItem[] = await request.json();

  return files;
}
