import React, { useContext, useState } from "react";

const StudentContext = React.createContext();

export function StudentContextProvider({children}){
    const [StudentList, addStudent]=useState([]);

    return(
      <StudentContext.Provider value={[StudentList, addStudent]}>
        {children}
      </StudentContext.Provider>
    )
}

export function useStudentConsumer(){
    return useContext(StudentContext);
}