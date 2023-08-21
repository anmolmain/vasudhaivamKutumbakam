function convertToAOO(json_data) {
    var result = [];
    for (var i in json_data)
        result.push([i, json_data[i]]);
    for (let i = 0; i < result.length; i++) {
        (result[i]).shift();
    }
    var final = []
    for (let x = 0; x < result.length; x++) {
        final.push(result[x][0]);
    }
    return final
}
export default convertToAOO