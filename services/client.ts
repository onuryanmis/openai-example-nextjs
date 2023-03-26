import axios from "axios";

type Music = {
    moods: string[],
    musicStyles: string[],
    artists: string[],
    musics: string[]
}

export async function getMusicData(music: any) {
    console.log(music.musics.join(","))
    const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
            prompt: `Moods:${music.moods.join(",")}
Music genres: ${music.musicStyles.join(",")}
Artists: ${music.artists.join(",")}
Music: ${music.musics.join(",")}
Can you suggest 3 music in these features?
Return response in the following parsable
JSON format:
        {
            "musics": [
                {
                    "name": "Halo",
                    "artist": "Beyonce",
                    "genre": "Pop",
                    "mood": "Happy"
                },
                {
                    "name": "Lose Yourself",
                    "artist": "Eminem",
                    "genre": "Rock",
                    "mood": "Sad"
                },
            ]
        }`,
            model: "text-davinci-003",
            max_tokens: 500,
            n: 1,
            stop: ".",
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer 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`,
            },
        }
    );

    console.log(response.data.choices[0].text)

    return JSON.parse(response.data.choices[0].text);
}
