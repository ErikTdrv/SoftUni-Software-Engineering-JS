function extractFile(input){
    let token = input.split('\\')
    let el = token[token.length - 1]
    let split = el.split('.')
    let indexOf = input.lastIndexOf('.') + 1
    let indexOfFile = input.lastIndexOf('.')
    let anotherIndexOf = input.lastIndexOf('\\') + 1
    let fileName = input.substring(anotherIndexOf, indexOfFile)
    let extension = input.substring(indexOf)

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.bat.cs')