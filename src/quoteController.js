function show(quotes,id){
    let character=quotes.find(quote=>quote.name==id)

    return character.quote


}
module.exports={show}