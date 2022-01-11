let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const onj = {}
comparaComThis = comparaComThis.bind(onj)