import React from 'react'
import Card from '../Components/Card'

const CourseList = [
  {
    courseID: 1,
    courseName: "Java Full Stack",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "React"],
    duration: "6 months",
    level: "Intermediate",
    mode: "Online",
    imageUrl: "https://inside.java/images/java-logo-vert-blk.png"
  },
  {
    courseID: 2,
    courseName: "MERN Stack",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    duration: "5 months",
    level: "Beginner to Intermediate",
    mode: "Online/Offline",
    imageUrl: "https://graffersid.com/wp-content/uploads/2023/08/MERN-Stack-scaled.webp"
  },
  {
    courseID: 3,
    courseName: "MEAN Stack",
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    duration: "5 months",
    level: "Intermediate",
    mode: "Online",
    imageUrl: "https://miro.medium.com/1*P8aGpuAxcVXgO4m7cByVtA.jpeg"
  },
  {
    courseID: 4,
    courseName: "Python Learning",
    technologies: ["Python", "Flask", "Django", "MySQL", "REST APIs"],
    duration: "4 months",
    level: "Beginner",
    mode: "Online/Offline",
    imageUrl: "https://runestone.academy/ns/books/published/mobilecsp/_images/python-logo.png"
  },
  {
    courseID: 5,
    courseName: "Data Science with Python",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
    duration: "6 months",
    level: "Intermediate",
    mode: "Online",
    imageUrl: "https://miro.medium.com/0*POjH5vv_7t8s8loG"
  },
  {
    courseID: 6,
    courseName: "DevOps Engineering",
    technologies: ["Linux", "Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    duration: "5 months",
    level: "Advanced",
    mode: "Online/Offline",
    imageUrl: "https://www.simform.com/wp-content/uploads/2022/01/what-is-devops-lifecycle.png"
  },
  {
    courseID: 7,
    courseName: "Cloud Computing (AWS & Azure)",
    technologies: ["AWS", "Azure", "EC2", "S3", "Lambda", "DevOps CI/CD"],
    duration: "6 months",
    level: "Intermediate",
    mode: "Online",
    imageUrl: "https://alleo.tech/wp-content/uploads/2019/09/cropped-amazon-aws-microsoft-azure-google-cloud-1.png"
  }
];

const Courses = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-11 mt-2 justify-center'>
      {
        CourseList.map((course,i)=>(
          <Card course={course} key={i} institute={"Ducat"} />
        ))
      }
      
    </div>
  )
}

export default Courses