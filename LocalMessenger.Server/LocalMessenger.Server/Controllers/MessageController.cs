using System.Collections.Generic;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace LocalMessenger.Server.Controllers
{
    public class MessageController : Controller
    {
        [HttpPost]
        [Route("api/messages")]
        public JsonResult Index([FromBody] MessageRequest requestData)
        {
            if (requestData.Token != "qwerty12345asdfgzxcvb")
            {
                return Json(new { message = "You have no access to this!", error = true});
            }
            
            // Mock data
            var data = new List<Message>()
            {
                new Message(1, "Tatyana Lapina", "Привет!"),
                new Message(2, "Sergey Gavrilov", "Эй, привет, рад тебя видеть"),
                new Message(3, "Anton Gavrilov", "ЕЕЕЕЕЕЕЕЕ, оно работает"),
                new Message(4, "Vinnikova Irina", "Нажми сюда"),
                new Message(5, "Zherdev Eugeniy", "Крутое приложение"),
                new Message(6, "Kozelchuk Maxim", "ОООООууууу, ееееееееееееееееее"),
                new Message(7, "Kuznecov Maxim", "Привет, пообщаемся?"),
                new Message(8, "Kukina Yulia", "Мдаааааа"),
                new Message(9, "Ivanov Igor", "Прикол"),
                new Message(10, "Andrey Martynov", "dsadsa"),
                new Message(11, "Lesha", "dsadsadsadsadsadsa"),
                new Message(12, "Igoryek", "weqqewq12321321"),
                new Message(13, "Vasyok", "ui.zip"),
                new Message(14, "Enemy", "ewq.rar"),
                new Message(15, "Ally", "q123/.popwe"),
                new Message(16, "iamjakehill", "qq123ac"),
                new Message(17, "Olalala", "qe3221dcveqer"),
            };
            Thread.Sleep(500);
            return Json(data);
        }
    }
    
    // Mock class
    public class Message
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string MessageText { get; set; }
        
        public Message(int id, string header, string messageText)
        {
            Id = id;
            Header = header;
            MessageText = messageText;
        }
    }

    public class MessageRequest
    {
        public string Token { get; set; }
    }
}