import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./styledComponents/Button.styled";
import { Card } from "./styledComponents/Card.styled";
import { GlobalStyles } from "./styledComponents/Global.styled";
import { Link } from "./styledComponents/Link.styled";
import { Typography } from "./styledComponents/Typography.styled";
import dark from "./themes/dark";
import light from "./themes/light";
import ig from "./assets/adrianna-geo-1rBg5YSi00c-unsplash.jpg";
import { Image } from "./styledComponents/Image.styled";


function App() {
  const [theme, settheme] = useState(dark)
  const themechanger = () => {
    settheme(theme => theme.id === dark.id ? light : dark)
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Card>
          <Typography heading>
            This is Main Heading
          </Typography>
          <Typography subHeading>
            This is component levele heading
          </Typography>
          <Typography>
            Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here.
          </Typography>
          <button onClick={themechanger}>change theme</button>
          <Button>
            Primary
          </Button>
          <Button secondary>
            Secondary
          </Button>
          <Image src={ig} alt="njksjs" />
          <br></br>
          <Link href="#">How to Play</Link>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
