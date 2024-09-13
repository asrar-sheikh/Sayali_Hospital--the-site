using Microsoft.AspNetCore.Mvc;
using Sayali_Hospital.Models;
using System.Diagnostics;

namespace Sayali_Hospital.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }


        public IActionResult Events()
        {
            return View();
        }
      
        public IActionResult ContactUs()
        {
            return View();
        }
        public IActionResult Services()
        {
            return View();
        }
    }
}
