export async function runCode(url) {
  if (typeof url !== "string") throw new Error("Invalid URL");
  const response = await fetch(url)
  const data = await response.json()
  return data
}

runCode('https://api.escuelajs.co/api/v1/categories');