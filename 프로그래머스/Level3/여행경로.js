// https://programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  let answer = [];
  function DFS(airport, tickets, path) {
    let newPath = [...path, airport];
    if (tickets.length === 0) {
      answer = [...answer, newPath];
    } else {
      tickets.forEach((ticket, idx) => {
        if (ticket[0] === airport) {
          const tempTickets = [...tickets];
          const [[from, to]] = tempTickets.splice(idx, 1);
          DFS(to, tempTickets, newPath);
        }
      });
    }
  }
  DFS('ICN', tickets, []);
  return answer.sort()[0];
}
