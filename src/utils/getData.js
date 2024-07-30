import axios from "./linkCustom"
const getCourse = async (idCourse) => {
    let response = await axios.get(`/api/course/get/${idCourse}`)
    return response.body
}
export { getCourse }



const getStudent = async (idStudent) => {
    let res = await axios.get(`/api/student/get/${idStudent}`)
    return res.body
}
export { getStudent }



const getTeacher = async (idTeacher) => {
    let r = await axios.get(`/api/teacher/get/${idTeacher}`)
    return r.body
}
export { getTeacher }