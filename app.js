const { createApp, ref }=  Vue;
const names = ["Lanre", "Ore", "Favour", "James"];
const active = false;
let goal = ref(1);
function setGoal(){
    setTimeout(() => {
        goal.value = Math.floor(Math.random()*10+1)
        console.log("T")
    }, 1000)
}
createApp({
    setup(){
        return {
            message: "lanre",
            names,
            active,
            goal,
            setGoal
        }
    }
}).mount("#app");