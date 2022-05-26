function solve(obj){
    let weight = obj.weight;
    let experience = obj.experience;
    let levelOfHydrated = obj.levelOfHydrated;

    if (obj.dizziness) {
        levelOfHydrated += 0.1 * weight * experience;

        obj.levelOfHydrated = levelOfHydrated;
        obj.dizziness = false;
    }

    return obj;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));