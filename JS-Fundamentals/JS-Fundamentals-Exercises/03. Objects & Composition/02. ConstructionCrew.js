function constructionCrew(list){
    if (list.dizziness === true){
        list.levelOfHydrated = list.weight * list.experience * 0.1
        list.dizziness = false
    }
    return list

}
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  )