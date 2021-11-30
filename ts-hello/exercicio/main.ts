// import { Like } from "./exercise";

// let giveLike = new Like(5);

// giveLike.likePost(false);

// giveLike.likePost(true);

// giveLike.likePost(false);

import { LikeComponent } from "./solucao";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);