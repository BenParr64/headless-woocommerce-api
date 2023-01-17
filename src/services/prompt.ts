export const generateRecipePrompt = ({
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
  Give the result in valid json based off the format below:

  {
    "title": "{recipeName}",
    "style": "{style}",
    "malts": [
      {
        "name": "{name}",
        "quantity": "{quantityInGrams}"
      }
    ],
    "hops": [
      {
        "name": "{name}",
        "quantity": "{quantityInGrams}"
        "timing": "{timing}",
        "type": "{type}"
      }
    ],
    "yeast": "{yeast}",
    "abv": "{abv}",
    "reasoningHtml": "{reasoningHtml}"
  }


  ${hop && 'Keyword: ' + hop + '\n Recipe:'}
    `
};


// You can use this website: https://help.mangrovejacks.com/hc/en-us/article_attachments/360019032917/Beer_Yeast_Chart.pdf