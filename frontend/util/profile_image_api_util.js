import axios from 'axios';

export const fetchProfileImages = () => (
  axios.get(`http://192.168.1.172:3000/api/profile_images/`)
)

export const fetchProfileImage = id => (
  axios.get(`http://192.168.1.172:3000/api/profile_images/${id}`)
)

export const createProfileImage = profileImage => (
//   axios.post('http://192.168.1.172:3000/api/profile_images',
//   {
//     profile_image: profileImage,
//   },
//     headers
//   )
// )

  fetch("http://192.168.1.172:3000/api/profile_images", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: profileImage,
  })

)

export const deleteProfileImage = (profileImage) => (
  axios.delete(`http://192.168.1.172:3000/api/profile_images/${profileImage.id}`)
)
