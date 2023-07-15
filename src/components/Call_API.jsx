const userKey = localStorage.getItem("key");
export const fetchUserData = async (key) => {
    const req = await fetch(`https://testpaper.xyz/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ key || userKey}`,
      },
    });
    const response = await req.json();
    return response.userData;
  };


export const getAllSubject = async (key) => {
    const req = await fetch(`https://testpaper.xyz/api/subject`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await req.json();
    return response.data;
  };

export const getAllChapter = async (key) => {
    const req = await fetch(`https://testpaper.xyz/api/chapter`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await req.json();
    return response.data;
  };