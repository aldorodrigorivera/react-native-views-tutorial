import * as SplashScreen from "expo-splash-screen";

export const splash = async (seconds)  => {
    try {
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        // TODO: VALIDAR USUARIO - SESION INICIADA
        // TODO: VALIDAR CONEXION
        // TODO: VALIDAR SUBSCRIPCION
        // TODO: VALIDAR VERSION DEL DISPOSITIVO O VER SI HAY ACTUALIZACION DISPONIBLE

    } catch (e) {
        console.warn(e);
    } finally {
        // Tell the application to render
        SplashScreen.hideAsync();
    }
}