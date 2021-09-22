

const translateText = async (text, language = "dk") => {
  try {
    const translation = await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "accept-encoding": "application/gzip",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key":
            "",
        },
        body: {
          q: "Hello, world!",
          target: "dk",
          source: "en",
        },
      }
    );
    const translationJson = await translation.json();
    console.log(translationJson);
  } catch (error) {
    console.log(error);
  }
};