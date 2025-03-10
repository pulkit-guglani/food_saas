// Third-party packages
import { AxiosHeaders } from "axios";
// Custom packages
import { API } from "@/api";
type HandlerOptions = {
  path: string;
  params?: Object;
  data?: Object;
  headers?: AxiosHeaders;
  timeout?: number;
};
export class ApiHandler {
  path: string;
  params?: Object;
  data?: Object;
  headers?: AxiosHeaders;
  timeout?: number;
  constructor(object: HandlerOptions) {
    const storedLang =
      (localStorage.getItem("langMode") as "en" | "ko") ?? "en";
    this.path = object.path || "";
    this.params = object.params || {};
    this.data = object.data || undefined;
    if (storedLang === "ko") {
      this.headers = new AxiosHeaders({
        ...object.headers?.toJSON(),
        "Accept-Language": storedLang,
      });
    } else {
      this.headers = object.headers || undefined;
    }
    this.timeout = object.timeout ?? 30000;
  }
  private fetchToken(): Promise<string> {
    return new Promise((resolve) => {
      const token: string | null = localStorage.getItem("access_token_jp");
      resolve(token ? `Bearer ${token}` : "");
    });
  }
  async get() {
    try {
      const token = await this.fetchToken();
      const response = await API.get(this.path, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        params: this.params,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during get api call");
    }
  }
  async post() {
    try {
      const token = await this.fetchToken();
      const response = await API.post(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during post api call");
    }
  }
  async patch() {
    try {
      const token = await this.fetchToken();
      const response = await API.patch(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during patch api call");
    }
  }
  async put() {
    try {
      const token = await this.fetchToken();
      const response = await API.put(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during put api call");
    }
  }
  async delete() {
    try {
      const token = await this.fetchToken();
      const response = await API.delete(this.path, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        params: this.params,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during delete api call");
    }
  }
}
