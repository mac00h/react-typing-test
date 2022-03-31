export const checkKeydown = (e: KeyboardEvent) => {
  if (e.location === 1 || e.location === 2) {
    return false;
  }

  let bool = true;

  switch (e.code) {
    case "Tab":
      bool = false;
      break;
    case "CapsLock":
      bool = false;
      break;
    case "Enter":
      bool = false;
      break;
    case "Backslash":
      bool = false;
      break;
    case "ArrowDown":
      bool = false;
      break;
    case "ArrowUp":
      bool = false;
      break;
    case "ArrowLeft":
      bool = false;
      break;
    case "ArrowRight":
      bool = false;
      break;
    case "Slash":
      bool = false;
      break;
    case "Space":
      bool = false;
      break;
  }

  return bool;
};
