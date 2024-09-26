const config = {
    model: "gpt-4o-mini",
    prompts:{
        updatePlural: 'Given the array of singular nouns, provide their plural forms as an array of strings without any extra text or explanation:',
        checkGrammar: 'For the given array, check all the sentence grammar and create an object for each with key as sentence and correctedSentence and correct the grammar. Return an array of objects without any addition text or explanation:'
    },
    inputs: {
        updatePlural: [
        "man",
        "fish"
    ],
        checkGrammar:[
        "She enjoys reading books.",
        "They was playing soccer in the park.",
        "He walks to school every day.",
        "The dog bark loudly last night."
      ]
    } 
};

export default config;