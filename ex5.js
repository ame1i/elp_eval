var ref
calculCos = function (val) {
res = Math.cos(val)
if (res === ref) {
    process.exit(0)
 }
    ref = res
    console.log(res)
        calculCos(Math.cos(val))
    setTimeout(calculCos, 0, res)
}
calculCos(0)