"use client";
import TagsInput from "../../components/TagsInput";
import {useState} from "react";
import Select from "react-select";
import {musicStyles, moods} from "../../data.json";
import {getOptions, getValues} from "../../lib/select2";
import {getMusicData} from "../../services/client";

export default function HomePageContainer() {
    const [selectedMusicStyleOptions, setSelectedMusicStyleOptions] = useState<any>([]);
    const [selectedMoodsOptions, setSelectedMoodsOptions] = useState<any>([]);
    const [favoriteSongs, setFavoriteSongs] = useState<any>([]);
    const [favoriteArtists, setFavoriteArtists] = useState<any>([]);
    const [showResult, setShowResult] = useState<any>(false);
    const [musicList, setMusicList] = useState<any>([]);

    const handleSubmit = async () => {
        const data = await getMusicData({
            musics: favoriteSongs,
            musicStyles: getValues(selectedMusicStyleOptions),
            moods: getValues(selectedMoodsOptions),
            artists: favoriteArtists,
        });

        setMusicList(data.musics);
        setShowResult(true);
    }

    return (
        <div className="homePageWrapper">
            <h1>Şarkı Öner</h1>
            <div className="container">
                <div className="formWrapper">
                    <div className="formGroup">
                        <label htmlFor="">Sevdiğin şarkılar</label>
                        <TagsInput setTags={setFavoriteSongs} tags={favoriteSongs}/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Sevdiğin sanatçılar</label>
                        <TagsInput setTags={setFavoriteArtists} tags={favoriteArtists}/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Müzik Türü</label>
                        <Select
                            isMulti
                            defaultValue={selectedMusicStyleOptions}
                            onChange={(o) => setSelectedMusicStyleOptions(o)}
                            options={getOptions(musicStyles)}
                            isOptionDisabled={() => selectedMusicStyleOptions.length >= 3}
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="">Ruh Hali</label>
                        <Select
                            isMulti
                            defaultValue={selectedMoodsOptions}
                            onChange={(o) => setSelectedMoodsOptions(o)}
                            options={getOptions(moods)}
                            isOptionDisabled={() => selectedMoodsOptions.length >= 3}
                        />
                    </div>
                    <button className="submitBtn" onClick={handleSubmit}>Şarkı Öner</button>
                </div>
                <div className={showResult ? "resultWrapper" : "resultWrapper display-none"}>
                    <h2 className="listTitle">Şarkı Listesi</h2>
                    <ul>
                        {musicList.map((music, index) => {
                            return <li key={index}>{music.artist} - {music.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}