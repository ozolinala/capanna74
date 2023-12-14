import styles from "../styles/Booking.module.css";
import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Space,
  TimePicker,
  DatePicker,
  Row,
  Col,
} from "antd";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";

const BookingForm = () => {
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      console.log("Success:", values);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const format = "HH:mm";

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <article>
      {isMobile ? (
        <div className={styles.containerMobile}>
          {
            <div className={styles.container}>
              {success ? (
                <div className={styles.successMessageContainer}>
                  <p className={styles.successMessage}>
                    You have successfully made a
                    reservation!
                  </p>
                  <img
                    src="/assets/check.svg"
                    alt="Landing Image"
                    className={styles.check}
                  />
                  <Link className={styles.backToMenu} href="/">
                    Go back to menu
                  </Link>
                </div>
              ) : (
                <Form
                  name="basic"
                  style={{
                    maxWidth: "90vw",
                    marginLeft: "1rem",
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
                        message: "Please input your name",
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
                        message: "Please input your last name",
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
                        message: "Please input your email",
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
                      <Input style={{ width: "20%" }} defaultValue="+45" />
                      <Input
                        style={{ width: "80%" }}
                        defaultValue="00 00 00 00"
                      />
                    </Space.Compact>
                  </Form.Item>

                  <Form.Item
                    label="Comment"
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ span: 16 }}
                  >
                    <TextArea rows={4} />
                  </Form.Item>

                  <Form.Item
                    label="Select a date"
                    name="date"
                    valuePropName="checked"
                    wrapperCol={{ span: 16 }}
                  >
                    <DatePicker onChange={onChange} />
                  </Form.Item>

                  <Form.Item
                    label="Select a time"
                    name="time"
                    valuePropName="checked"
                    wrapperCol={{ span: 16 }}
                  >
                    <TimePicker
                      defaultValue={dayjs("19:30", format)}
                      format={format}
                      minuteStep={15}
                      hourStep={1}
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24, offset: 0 }}>
                    <div className={styles.buttonContainerMobile}>
                      <Button
                        style={{
                          width: "10rem",
                          borderRadius: "20px",
                          backgroundColor: "#e85835",
                          color: "white",
                        }}
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              )}
            </div>
          }
        </div>
      ) : (
        <div className={styles.container}>
          {success ? (
            <div className={styles.successMessageContainer}>
              <p className={styles.successMessage}>
                The table is available, you have successfully made a
                reservation!
              </p>
              <img
                src="/assets/check.svg"
                alt="Landing Image"
                className={styles.check}
              />
              <Link className={styles.backToMenu} href="/">
                Go back to menu
              </Link>
            </div>
          ) : (
            <Form
              name="basic"
              labelCol={{
                span: isMobile ? 16 : 8,
              }}
              wrapperCol={{
                span: isMobile ? 16 : 16,
              }}
              style={{
                maxWidth: "90vw",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="First name"
                    name="first-name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name",
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
                        message: "Please input your last name",
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
                        message: "Please input your email",
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
                </Col>
                <Col span={12}>
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
                      span: 24, // Set to the full width of the column
                      offset: 0,
                    }}
                  >
                    <div className={styles.buttonContainer}>
                      <Button
                        style={{
                          width: "10rem",
                          borderRadius: "20px",
                          backgroundColor: "#e85835",
                          color: "white",
                        }}
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          )}
        </div>
      )}
    </article>
  );
};

export default BookingForm;
