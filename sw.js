self.addEventListener("install", function(event) {
    console.log("To-Do App installed");
});

self.addEventListener("activate", function(event) {
    console.log("To-Do App activated");
});