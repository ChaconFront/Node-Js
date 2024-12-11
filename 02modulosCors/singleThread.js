
function singleThread() {
    console.log('-------------------------------------------------')
    console.log('EL PROCESO DE NODE')
    console.log('id del proceso..........'+ process.pid)
    console.log('titulo..................'+ process.title)
    console.log('Directorio de node.......'+ process.execPath)
    console.log('Directorio actual........'+ process.cwd())
    console.log('Version de node..........'+ process.version)
    console.log('Versionde Dependencias...'+ process.versions)
    console.log('Plataforma (S.O).........'+process.platform)
    console.log('Arquitectura (S.0).......'+process.arch)
    console.log('Tiempo activo de node....'+ process.uptime())
    console.log('Argumentos del proceso.....' + process.argv)//recordar que argv es un arreglo.
    console.log('-------------------------------------------------')
}


singleThread()