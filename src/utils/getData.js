import axios from "axios"

const getCourse = async (idCourse) => {
    let response = await axios.get(`http://localhost:8080/api/course/get/${idCourse}`)
    return response.data.body
}
export { getCourse }



const getStudent = async (idStudent) => {
    let res = await axios.get(`http://localhost:8080/api/student/get/${idStudent}`)
    return res.data.body
}
export { getStudent }



const getTeacher = async (idTeacher) => {
    let r = await axios.get(`http://localhost:8080/api/teacher/get/${idTeacher}`)
    return r.data.body
}
export { getTeacher }