import {system} from "@minecraft/server";
system.runInterval(() => {
	for (const player of server.world.getAllPlayers()){
    const x = player.location.x;
    const y = player.location.y;
    const z = player.location.z;
    const r = player.getRotation().y;
    player.runCommandAsync(`titleraw @a actionbar{"rawtext":[{"text": "XYZ: ${x}, ${y}, ${z}"}]}`);
  }
});
