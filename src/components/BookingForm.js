import styles from "../styles/Booking.module.css";
import { Button, Form, Input, Space, TimePicker, DatePicker } from "antd";
import dayjs from "dayjs";

const BookingForm = () => {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const format = "HH:mm";
  return (
    <article className={styles.container}>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First name"
            name="first-name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last name"
            name="last-name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="phone-number"
            rules={[
              {
                required: true,
                message: "Please input your phone number",
              },
            ]}
          >
            <Space.Compact>
              <Input
                style={{
                  width: "20%",
                }}
                defaultValue="+45"
              />
              <Input
                style={{
                  width: "80%",
                }}
                defaultValue="00 00 00 00"
              />
            </Space.Compact>
          </Form.Item>

          <Form.Item
            label="Comment"
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 16,
            }}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </div>
      <div>
        <Form>
          <Form.Item
            label="Select a date"
            name="date"
            valuePropName="checked"
            wrapperCol={{
              span: 16,
            }}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Select a time"
            name="time"
            valuePropName="checked"
            wrapperCol={{
              span: 16,
            }}
          >
            <TimePicker
              defaultValue={dayjs("19:30", format)}
              format={format}
              minuteStep={15}
              hourStep={1}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </article>
  );
};

export default BookingForm;
