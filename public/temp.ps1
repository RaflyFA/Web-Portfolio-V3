using System;
using System.IO;
using System.Drawing;
using System.Drawing.Drawing2D;

// Create placeholder images
string[] imageNames = {
    "profile.jpg",
    "webthinksale.jpg", 
    "srmotor.jpg",
    "Project-RentalPS.jpg",
    "WebsiteJoki.jpg",
    "kedaikopi.jpg",
    "uiux.jpg",
    "desain1(1).jpg"
};

foreach (string imgName in imageNames) {
    using (Bitmap bmp = new Bitmap(400, 300)) {
        using (Graphics g = Graphics.FromImage(bmp)) {
            g.Clear(Color.FromArgb(220, 220, 220));
            g.FillRectangle(new SolidBrush(Color.FromArgb(100, 150, 200)), 0, 0, 400, 300);
            
            using (Font font = new Font("Arial", 16, FontStyle.Bold)) {
                g.DrawString(Path.GetFileNameWithoutExtension(imgName), font, Brushes.White, 50, 130);
            }
        }
        bmp.Save(imgName, System.Drawing.Imaging.ImageFormat.Jpeg);
        Write-Host "Created "
    }
}
