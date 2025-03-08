using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;


namespace Desktop2
{
    public partial class Videos : Form
    {
        public Videos()
        {
            InitializeComponent();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int videoId = int.Parse(textBox1.Text);
            string title = textBox2.Text;
            string category = textBox3.Text;
            string content = textBox4.Text;

            string query = "INSERT INTO videos(VideoId, Title, Category, Content) VALUES (@VideoId, @Title, @Category, @Content)";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection()) // No semicolon here
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@VideoId", videoId);
                    cmd.Parameters.AddWithValue("@Title", title);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Content", content);

                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Inserted Successfully");
            VideoData();

        }

        private void VideoData()
        {
            string query = "SELECT  * FROM videos";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                    {
                        DataTable dataTable = new DataTable();
                        adapter.Fill(dataTable);
                        dataGridView1.DataSource = dataTable;

                    }
                    

                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int videoId = int.Parse(textBox1.Text);
            string title = textBox2.Text;
            string category = textBox3.Text;
            string content = textBox4.Text;

            string query = "UPDATE videos SET Title=@Title, Category=@Category,Content=@Content WHERE VideoID=@VideoID";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection()) // No semicolon here
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@VideoID", videoId);
                    cmd.Parameters.AddWithValue("@Title", title);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Content", content);

                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Updated Successfully");
            VideoData();
        }

        private void button3_Click(object sender, EventArgs e)
        {

            int videoId = int.Parse(textBox1.Text);

            string query = "DELETE FROM videos WHERE VideoID=@VideoID ";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection()) // No semicolon here
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@VideoId", videoId);


                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Deleted Successfully");
            VideoData();

        }
        private void Video_Load(object sender, EventArgs e)
        {
            VideoData();
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
        }
    }
}
