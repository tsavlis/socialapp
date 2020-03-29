import * as Permissions from "expo-permissions";

class UserPermissions {
  getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status != "granted") {
      alert("we need permissions to camera roll");
    }
  };
}

export default new UserPermissions();
