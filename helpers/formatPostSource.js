export default function formatPostSource(source){
    if(source){
      if(source[0]){
        return ` | ${source[0].text}`;
      }
      
      return null;
    }
  
    return null;
  }