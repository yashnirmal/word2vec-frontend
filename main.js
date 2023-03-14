// const baseUrl = "https://yashnirmal-curly-zebra-57995xj4x627j9g-5000.preview.app.github.dev"
const baseUrl = "https://word2vec-demo-backend.onrender.com"
const salaryPredictionBtn = document.querySelector("#submitsalary")
const sentimentPredictionBtn = document.querySelector("#calcsentiment")


salaryPredictionBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  const finalRes = document.querySelector("#salaryresult")
  finalRes.innerText="Calculating..."
  const exp = document.querySelector('#experience').value
  const test = document.querySelector('#test_score').value
  const interview = document.querySelector('#interview_score').value

  const formData = new FormData()
  formData.append('experience',exp)
  formData.append('test_score',test)
  formData.append('interview_score',interview)

  console.log(formData)

  fetch(baseUrl+"/predict_salary",{
    method:'POST',
    body:formData
  })
  .then(res=>res.json())
  .then(data=>{
    finalRes.innerText ="Employee Salary = "+data.result
  })
  .catch((err)=>{
    finalRes.innerText = "Some Error Occured!"
    console.log(err)
  })
})


sentimentPredictionBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const finalRes = document.querySelector("#sentimentresult")
  finalRes.innerText="Calculating..."
  const text = document.querySelector("#sentiment_text").value
  console.log(text)

  const formData = new FormData()
  formData.append('text',text)

  fetch(baseUrl+"/predict_sentiment",{
    method:'POST',
    body:formData
  })
  .then(res=>res.json())
  .then(data=>{
    finalRes.innerText ="Text Sentiment Score = "+data.result
  })
  .catch((err)=>{
    finalRes.innerText = "Some Error Occured!"
    console.log(err)
  })

})