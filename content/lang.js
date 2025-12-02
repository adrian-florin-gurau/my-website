export async function loadLanguage() {
  // Read language from localStorage
  const savedLang = localStorage.getItem("lang") || "en";

  // Determine which file to load
  const filePath = savedLang === "ro" ? "./ro.json" : "./en.json";

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Could not load language file: ${filePath}`);
    }

    const data = await response.json();
    return data; // return translations object
  } catch (error) {
    console.error(error);

    // fallback to English if something fails
    const fallback = await fetch("./en.json");
    return fallback.json();
  }
}
