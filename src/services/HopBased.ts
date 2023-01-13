export const recipeBasedOnHop = ({
  hop,
  style,
}: {
  hop?: string;
  style?: string;
}) => {
  return `Generate a beer brewing recipe (25L), giving metric units. 
  Use the keyword below, the keyword could be a style, hop, malt etc to create the recipe. 
  Make sure to keep the recipe balanced by using your brewing knowledge of aroma hops, bittering hops etc. 
  Use the most appropriate yeast for the style. 
  Give a short reason why you have selected the ingredients too.
  Please only use Crisp  or weyermann branded malts. 
  Can you also include an estimated abv of the recipe
  Output the values as seen below template
  Come up with a creative recipe name.

  <h2>{recipe name} (25L)</h2>
  <h3>Style: {style}</h3>
  <h3>Malts: </h3>
  <ul>
    <li>{malts list}</li>
  </ul>
  <h3>Hops:</h3>
  <ul>
    <li>{hops list}<li>
  </ul>
  <h3>Yeast: {yeast}</h3>
  <h3>{colour} {ebc}</h3>
  <h3>{abv} {abv}</h3>

  Reasoning: 
  <p>{reasoning}</p>

  ${hop && 'Keyword: ' + hop + '\n Recipe:'}
    `
};


// You can use this website: https://help.mangrovejacks.com/hc/en-us/article_attachments/360019032917/Beer_Yeast_Chart.pdf