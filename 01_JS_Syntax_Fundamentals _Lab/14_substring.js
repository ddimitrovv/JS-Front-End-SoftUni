function substring(arr, start, count) {
    let output=''
    for (let i=start; i<start+count; i++) {
        output+=arr[i]
    }
    console.log(output)
}