/**
 * INPUT EITHER THE NUMBER OF DATA OR THE PERCENTAGE (IF PERCENTAGE, MUST ADD UP TO 100 OTHERWISE IT WILL DISPLAY AS 'X (Y%)' THINKING IT IS NUMBER)
 */

export const ClassData = {
    labels: [
        "1st year",
        "2nd year",
        "3rd year",
        "4th year",
        "5th year+",
        "Masters/PhD",
    ],
    datasets: [
        {
            label: "Class Demographics",
            data: [42.7, 27.3, 9.68, 5.14, 1.38, 13.8],
            backgroundColor: [
                "#FFBD59",
                "#B8A23A",
                "#768427",
                "#3B641D",
                "#02694B",
                "#004316",
            ],
            hoverOffset: 4,
        },
    ],
};

export const MajorData = {
    labels: [
        "Computer Science",
        "Industrial Engineering",
        "Other Engineering",
        "Anaytics",
        "Mathematics",
        "Business Administration",
        "Other",
    ],
    datasets: [
        {
            label: "Major Demographics",
            data: [62.6, 9.86, 8.25, 8.65, 3.02, 2.41, 5.21],
            backgroundColor: [
                "#88CDC5",
                "#3D7990",
                "#295172",
                "#1C2C4E",
                "#BC89A3",
                "#613b4e",
                "#301b26",
            ],
            hoverOffset: 4,
        },
    ],
};