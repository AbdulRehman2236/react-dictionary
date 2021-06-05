import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en_US");
  const [meaning, setMeaning] = useState([]);

  const getDictionary = async () => {
    try {
      const data = await axios.get(
        //`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${"dict.1.1.20210529T063519Z.82d57c22efdb3cae.dd6322801bf375dc58363425d63db07884ad100f"}&lang=${category}&text=${word}`
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeaning(data.data);
      console.log(meaning);
    } catch (error) {}
  };

  useEffect(() => {
    getDictionary();
  }, [word, category, setCategory]);

  return (
    <Container
      maxWidth="md"
      style={({ direction: "flex" }, { flexDirection: "column" })}
    >
      <Header
        word={word}
        setWord={setWord}
        category={category}
        setCategory={setCategory}
        meaning={meaning}
        setMeaning={setMeaning}
      />
    </Container>
  );
}

export default App;
