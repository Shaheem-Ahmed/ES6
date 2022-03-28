var arr = [
    {
     FIRSTNAME:"Ahmed",
     LASTNAME:"Mohammed",
     group:"group"
    },

    {
        FIRSTNAME:"Abdul Minhas",
        LASTNAME:"Abid",
        group:"group"
    },

    {
        FIRSTNAME:"Areeb",
        LASTNAME:"Wasim",
        group:"group"
    },

    {
        FIRSTNAME:"Ibad",
        LASTNAME:"Younis",
        group:"group"
    },

    {
        FIRSTNAME:"Hanif",
        LASTNAME:"Akram",
        group:"group"
    }
 ];


var newArray = [];


for (var i = 0; i < arr.length; i++){
newArray.push(arr[i].LASTNAME);
}

for (var i = 0; i < arr.length; i++){
newArray.push(arr[i].FIRSTNAME);
}

console.log(newArray.join(', '));