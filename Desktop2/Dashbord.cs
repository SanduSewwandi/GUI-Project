using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Desktop2
{
    public partial class Dashbord : Form
    {
        public Dashbord()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Videos pt = new Videos();
            pt.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Student cr = new Student();
            cr.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Tute iy = new Tute();
            iy.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Hide();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Menu or = new Menu();
             or.Show();
        }
    }
}
