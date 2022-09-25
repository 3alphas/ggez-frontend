type IndexItem = {
  name: string;
  type: "directory" | "file";
  mtime: string;
  size?: number;
};

export async function fetchIndex() {
  const request = await fetch("https://uppi.fi/");
  const items: IndexItem[] = await request.json();
  const files = items.filter(({ type }) => type === "file");
  const directories = items.filter(({ type }) => type === "directory");

  return { files, directories };
}
