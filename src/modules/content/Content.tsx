import React from "react";
import "./content.scss";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from "@mui/material/Switch";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
]
export default function Content() {
  return (
      <div className="content">
        <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
        </div>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <Switch {...label} />

      <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          repellat repudiandae doloribus velit explicabo eius excepturi delectus
          modi nemo, molestiae fuga ipsa dolorum aut voluptas nihil laborum
          facere eaque consequatur iure. Explicabo unde fugit animi earum
          ratione tempore quia magni repellat odio labore neque odit porro eius
          obcaecati blanditiis dolorum est esse nobis iure deleniti, consectetur
          excepturi quo amet? Saepe qui minima quia iste voluptatibus nobis,
          laboriosam ex corporis alias? Maxime hic laudantium mollitia quaerat
          quae? Accusamus dolorem voluptatum illum nostrum ut necessitatibus
          fuga facilis sed explicabo possimus nulla porro, harum nobis tempora
          aliquid quas atque cum. Dolorem, assumenda, quasi unde doloribus
          similique enim voluptatibus laborum cupiditate voluptas suscipit
          quibusdam ullam, facilis dolor sapiente tempora fugit! Expedita autem
          iusto, totam voluptas accusantium corporis? Molestias incidunt
          voluptatum dicta explicabo nobis, dolores deserunt ex? Aliquid,
          veritatis atque? Ullam facere sint inventore expedita, asperiores
          laudantium aspernatur natus quas veniam facilis repellendus distinctio
          quibusdam non modi animi eos nobis necessitatibus unde tenetur ipsa
          vel illum provident reiciendis? Pariatur aspernatur, nesciunt
          reprehenderit quia officia magni beatae! Ex nihil praesentium illum
          repudiandae dolorem, perspiciatis deserunt. Blanditiis suscipit vero
          dignissimos eum nobis placeat, iusto dolorum voluptate quam, sed
          labore laboriosam est quod sunt culpa molestiae atque deserunt et?
          Atque deserunt recusandae dolore molestiae non expedita illo
          praesentium beatae porro, facere soluta temporibus cum ducimus
        </div>
      </div>
  );
}
