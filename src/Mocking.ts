const MockText = (input: string) => {
    let previousCharLowercase = false;
    const modifiedChars: string[] = [];
    for(let c of input.split("")) {
      if(/(?!\d)[\wäÄöÖüÜßẞ]/.test(c)) {
        if(previousCharLowercase) {
          modifiedChars.push(c.toUpperCase());
        }else{
          modifiedChars.push(c.toLowerCase());
        }
        previousCharLowercase = !previousCharLowercase;
      }else{
        modifiedChars.push(c);
      }
    }
    return modifiedChars.join("");
  };

export default MockText;