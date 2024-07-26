import axios from "axios"
import { getCourse, getTeacher } from "../utils/getData"
import { toast, ToastContainer } from "react-toastify"
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const postCreateUser = (firstName, lastName, email) => {
    let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    }
    if (validateEmail(email)) {
        return axios.post('http://localhost:8080/api/teacher/?callerId=4444', data)

    } else {
        toast.error("Email is not valid")
    }
}
export { postCreateUser }


const postCreateStudent = (firstNamei, lastNamei, courseId, courseNamei, titlei) => {
    let r = getCourse(courseId);
    let info = {
        firstName: firstNamei,
        lastName: lastNamei,
        course: {
            id: courseId,
            courseName: courseNamei,
            title: titlei
        }
    };

    return r.then(course => {
        // Extract values from the resolved promise object
        const { id, courseName, title } = course;
        if (id.toString() === courseId && courseName === courseNamei && title === titlei) {
            toast.success("CREATED");
            return axios.post('http://localhost:8080/api/student/?callerId=4444', info);
        } else {
            toast.error("COURSE NOT FOUND");
            throw new Error("Course not found");
        }
    }).catch(error => {
        toast.error("An error occurred");
    });
}

export { postCreateStudent }


const postCreateCourse = (courseName, title, teacherId, firstNamet, lastNamet, emailt) => {
    let r = getTeacher(teacherId);

    return r.then(teacher => {
        // Extract values from the resolved promise object
        const { id, firstName, lastName, email } = teacher;

        let infoCourse = {
            courseName: courseName,
            title: title,
            teacher: {
                id: teacherId,
                firstName: firstNamet,
                lastName: lastNamet,
                email: emailt,
            }
        };

        if (id.toString() === teacherId && firstName === firstNamet && lastName === lastNamet && emailt === email) {
            toast.success("CREATED");
            return axios.post('http://localhost:8080/api/course/?callerId=4444', infoCourse);
        } else {
            toast.error("TEACHER NOT FOUND");
            throw new Error("Teacher not found");
        }
    }).catch(error => {
        toast.error("An error occurred");
    });
}

export { postCreateCourse }

